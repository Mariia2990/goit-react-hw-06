import css from './Layot.module.css';

export const Layout = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};
