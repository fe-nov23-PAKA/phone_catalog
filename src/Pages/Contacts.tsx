import a_duchenko from "../assets/img/team_photos/a_duchenko.png";
import r_voshchylo from "../assets/img/team_photos/r_voshchylo.jpg";
import d_iarechuk from "../assets/img/team_photos/d_iarechuk.jpg";
import n_prokopenko from "../assets/img/team_photos/n_prokopenko.png";
import r_tkachuk from "../assets/img/team_photos/r_tkachuk.jpg";
import { Github } from "../icons/Github";

export const Contacts = () => {
  return (
    <>
      <div className="container flex min-h-[calc(100vh-64px-98px)] flex-col items-center">
        <h1 className="mb-8 pt-8 text-center text-[48px]/[56px] font-bold text-primary dark:text-dark-white">
          Our team
        </h1>
        <div className="flex w-full flex-col flex-wrap items-start justify-between gap-y-8 pb-8 sm:flex-row sm:justify-evenly xl:justify-evenly">
          <div className="flex h-full w-full flex-col items-center justify-start gap-y-4 rounded-lg border border-element-color bg-white p-6 shadow-lg shadow-zinc-400 dark:rounded-none dark:border-dark-surface2 dark:bg-dark-surface2 dark:shadow-zinc-700 sm:w-[30%] xl:w-2/12 xl:shadow-2xl xl:shadow-zinc-600 xl:dark:shadow-zinc-700">
            <div>
              <a
                href="https://github.com/dyarechuk"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="block h-[120px] w-[120px] rounded-lg object-contain transition-all hover:scale-[1.1] dark:rounded-none xl:max-h-[160px] xl:max-w-[160px]"
                  src={d_iarechuk}
                  alt="Dmytro"
                />
              </a>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1">
              <h3 className="text-center text-[22px]/[27px] font-bold text-primary dark:text-dark-white">
                Dmytro Yarechuk
              </h3>
              <a
                rel="noreferrer"
                href="https://github.com/dyarechuk"
                target="_blank"
                className="animate-pulse font-semibold text-primary dark:text-dark-white"
              >
                <div className="flex items-center gap-x-2">
                  Github
                  <Github />
                </div>
              </a>
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-start gap-y-4 rounded-lg border border-element-color bg-white p-6 shadow-lg shadow-zinc-400 dark:rounded-none dark:border-dark-surface2 dark:bg-dark-surface2 dark:shadow-zinc-700 sm:w-[30%] xl:w-2/12 xl:shadow-2xl xl:shadow-zinc-600 xl:dark:shadow-zinc-700">
            <div>
              <a
                rel="noreferrer"
                href="https://github.com/rvoshchylo"
                target="_blank"
              >
                <img
                  className="block h-[120px] w-[120px] rounded-lg object-contain transition-all hover:scale-[1.1] dark:rounded-none xl:max-h-[160px] xl:max-w-[160px]"
                  src={r_voshchylo}
                  alt="Ruslan"
                />
              </a>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1">
              <h3 className="text-center text-[22px]/[27px] font-bold text-primary dark:text-dark-white">
                Ruslan Voschylo
              </h3>
              <a
                rel="noreferrer"
                href="https://github.com/rvoshchylo"
                target="_blank"
                className="animate-pulse font-semibold text-primary dark:text-dark-white"
              >
                <div className="flex items-center gap-x-2">
                  Github
                  <Github />
                </div>
              </a>
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-start gap-y-4 rounded-lg border border-element-color bg-white p-6 shadow-lg shadow-zinc-400 dark:rounded-none dark:border-dark-surface2 dark:bg-dark-surface2 dark:shadow-zinc-700 sm:w-[30%] xl:w-2/12 xl:shadow-2xl xl:shadow-zinc-600 xl:dark:shadow-zinc-700">
            <div>
              <a
                href="https://github.com/AntonDuchenko"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="block h-[120px] w-[120px] rounded-lg object-contain transition-all hover:scale-[1.1] dark:rounded-none xl:max-h-[160px] xl:max-w-[160px]"
                  src={a_duchenko}
                  alt="Anton"
                />
              </a>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1">
              <h3 className="text-center text-[22px]/[27px] font-bold text-primary dark:text-dark-white">
                Anton Duchenko
              </h3>
              <a
                href="https://github.com/AntonDuchenko"
                rel="noreferrer"
                target="_blank"
                className="animate-pulse font-semibold text-primary dark:text-dark-white"
              >
                <div className="flex items-center gap-x-2">
                  Github
                  <Github />
                </div>
              </a>
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-start gap-y-4 rounded-lg border border-element-color bg-white p-6 shadow-lg shadow-zinc-400 dark:rounded-none dark:border-dark-surface2 dark:bg-dark-surface2 dark:shadow-zinc-700 sm:w-[30%] xl:w-2/12 xl:shadow-2xl xl:shadow-zinc-600 xl:dark:shadow-zinc-700">
            <div>
              <a
                href="https://github.com/yaneznayou"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="block h-[120px] w-[120px] rounded-lg object-contain transition-all hover:scale-[1.1] dark:rounded-none xl:max-h-[160px] xl:max-w-[160px]"
                  src={n_prokopenko}
                  alt="Nikita"
                />
              </a>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1">
              <h3 className="text-center text-[22px]/[27px] font-bold text-primary dark:text-dark-white">
                Nikita Prokopenko
              </h3>
              <a
                href="https://github.com/yaneznayou"
                rel="noreferrer"
                target="_blank"
                className="animate-pulse font-semibold text-primary dark:text-dark-white"
              >
                <div className="flex items-center gap-x-2">
                  Github
                  <Github />
                </div>
              </a>
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-start gap-y-4 rounded-lg border border-element-color bg-white p-6 shadow-lg shadow-zinc-400 dark:rounded-none dark:border-dark-surface2 dark:bg-dark-surface2 dark:shadow-zinc-700 sm:w-[30%] xl:w-2/12 xl:shadow-2xl xl:shadow-zinc-600 xl:dark:shadow-zinc-700">
            <div>
              <a
                href="https://github.com/rtkachuk-moon"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="block h-[120px] w-[120px] rounded-lg object-contain transition-all hover:scale-[1.1] dark:rounded-none xl:max-h-[160px] xl:max-w-[160px]"
                  src={r_tkachuk}
                  alt="Rostyslav"
                />
              </a>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1">
              <h3 className="text-center text-[22px]/[27px] font-bold text-primary dark:text-dark-white">
                Rostyslav Tkachuk
              </h3>
              <a
                href="https://github.com/rtkachuk-moon"
                rel="noreferrer"
                target="_blank"
                className="animate-pulse font-semibold text-primary dark:text-dark-white"
              >
                <div className="flex items-center gap-x-2">
                  Github
                  <Github />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
