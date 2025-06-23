// 変更なし
function extractOwnerAndRepo(repoUrl: string): { owner: string; repo: string } {
  // URLオブジェクトを使って安全にパースする
  // もし完全なURLでなくても、ベースURLを与えればpathnameを抽出できる
  const url = new URL(repoUrl, "https://github.com/");

  // pathnameから先頭のスラッシュを取り除き、/で分割する
  // 例: "/nanaism/misskey" -> "nanaism/misskey" -> ["nanaism", "misskey"]
  const pathParts = url.pathname.replace(/^\//, "").split("/");

  // もし pathParts が ["nanaism", "misskey", ""] のように末尾に空文字が入るケースも考慮
  const filteredParts = pathParts.filter((part) => part.length > 0);

  return { owner: filteredParts[0], repo: filteredParts[1] };
}

// ★★★ 修正箇所 1 ★★★
async function fetchRepoDetails(owner: string, repo: string) {
  const repoResponse = await fetch(
    `https://api.github.com/repos/${owner}/${repo}`,
    {
      // ヘッダーに認証トークンを追加
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      // キャッシュ戦略を revalidate に変更
      next: { revalidate: 3600 }, // 1時間（3600秒）キャッシュを再利用
    }
  );

  // デバッグ用にエラー詳細を出力する（問題が解決したら削除してもOK）
  if (!repoResponse.ok) {
    const errorBody = await repoResponse.text();
    console.error(
      "Failed to fetch repository details. Status:",
      repoResponse.status
    );
    console.error("API Response:", errorBody);
    throw new Error("Failed to fetch repository details");
  }

  return repoResponse.json();
}

// ★★★ 修正箇所 2 ★★★
async function fetchReadmeContent(
  owner: string,
  repo: string
): Promise<string> {
  const readmeResponse = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/readme`,
    {
      headers: {
        Accept: "application/vnd.github.v3.raw",
        // こちらにも認証トークンを追加
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      // こちらもキャッシュ戦略を変更
      next: { revalidate: 3600 },
    }
  );

  return readmeResponse.ok ? await readmeResponse.text() : "";
}

// 変更なし
interface RepoData {
  id: number;
  owner: string;
  slug: string;
  repoName: string;
  description: string | null;
  stargazersCount: number;
  topics: string[];
  readme: string;
  homepage: string;
}

// 変更なし
async function fetchRepoData(repoUrl: string): Promise<RepoData> {
  // URLから、ownerとrepoを抜き出す
  const { owner, repo } = extractOwnerAndRepo(repoUrl);
  // リポジトリのメタデータを取得
  const repoData = await fetchRepoDetails(owner, repo);
  // README.md のデータを取得
  const readmeContent = await fetchReadmeContent(owner, repo);

  return {
    id: repoData.id,
    owner: owner,
    slug: repo,
    repoName: repoData.name,
    description: repoData.description,
    stargazersCount: repoData.stargazers_count,
    topics: repoData.topics,
    homepage: repoData.homepage,
    readme: readmeContent,
  };
}

// 変更なし
export { extractOwnerAndRepo, fetchRepoData };
