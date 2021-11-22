/* eslint-disable no-nested-ternary */
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Link, { LinkProps } from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useLocation } from 'react-router';
import MuiBreadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link as RouterLink } from 'react-router-dom';
import routes from '../routes';
import RouteParser from 'route-parser';
import { Box, Container } from '@material-ui/core';

const breadcrumbNameMap: { [key: string]: string } = {};
routes.forEach( route => breadcrumbNameMap[route.path as string] = route.label)

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkRouter: {
      color: '#4db5ab',
      "&:focus, &:active" : {
        color: '#4db5ab',
      },
      "&:hover" : {
        color: "#055a52",
      }
    }
  }),
);

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => <Link {...props} component={RouterLink as any} />;

const Breadcrumbs = () => {
  const classes = useStyles();
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  pathnames.unshift('/');

  return (
    <Container>
      <Box paddingBottom={2}>
        <MuiBreadcrumbs aria-label="breadcrumb">
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `${pathnames.slice(0, index + 1).join('/').replace('//','/')}`;
              const route = Object.keys(breadcrumbNameMap).find(path => new RouteParser(path).match(to));
              
              if (route === undefined) return false;

              return last ? (
                <Typography color="textPrimary" key={to}>
                  {breadcrumbNameMap[to]}
                </Typography>
              ) : (
                <LinkRouter color="inherit" to={to} key={to} className={classes.linkRouter}>
                  {breadcrumbNameMap[to]}
                </LinkRouter>
              );
            })}
          </MuiBreadcrumbs>
      </Box>
    </Container>
  );
}

export default Breadcrumbs;