import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { ArrowRight } from '../../../icons/Arrow-Right';
import { HomePageIcon } from '../../../icons/HomePageIcon';
import { useAppSelector } from '../../../app/hooks';

export const Breadcrumbs = () => {
  const link = useLocation()
    .pathname.split('/')
    .filter((linkItem) => linkItem !== '');

  const theme = useAppSelector((state) => state.theme);

  return (
    <div className="mb-6 flex items-center gap-x-2 text-[14px]/[14px] font-bold sm:mb-10">
      <Link to="/">
        <HomePageIcon className="transition-all dark:text-dark-secondary dark:hover:text-dark-white" />
      </Link>
      {link.map((linkItem, index) => (
        <React.Fragment key={linkItem}>
          <ArrowRight fill={theme === 'dark' ? '#4A4D58' : '#89939A'} />
          <Link
            to={`/${linkItem}`}
            className={classNames(
              'capitalize text-primary transition-all dark:text-dark-secondary dark:hover:text-dark-white',
              {
                'pointer-events-none text-secondary transition-all dark:text-dark-white':
                  index === link.length - 1,
              },
              {
                'pt-[1px]': index === 0,
              },
            )}
            key={linkItem}
          >
            {linkItem}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};
