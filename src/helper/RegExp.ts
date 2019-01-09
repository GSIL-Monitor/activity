import { AppConfig } from "./config";
const BRANCH_REG = /(^https?:\/\/.*)\/(.+)$/g;

interface IPath {
  path: string;
  branch: string;
}

export function getBranch(
  url: string,
  defaultBranch: string = AppConfig.DEFAULT_BRANCH
) {
  const res: IPath = {
    branch: defaultBranch,
    path: AppConfig.BASE_API_TECH
  };
  if (url) {
    url.replace(
      BRANCH_REG,
      (
        path: string = AppConfig.BASE_API_TECH,
        branch: string = defaultBranch
      ): any => {
        res.path = path;
        res.branch = branch;
      }
    );
  }

  return res;
}
