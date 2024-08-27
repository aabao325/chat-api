// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Stack } from '@mui/material';
import LogoSection from 'layout/MainLayout/LogoSection';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ThemeButton from 'ui-component/ThemeButton';
// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const account = useSelector((state) => state.account);

  return (
    <>
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Box component="span" sx={{ flexGrow: 1 }}>
          <LogoSection />
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />
      <Stack spacing={1} direction="row" alignItems="center">
        <Button component={Link} variant="text" to="/home" color={pathname === '/home' ? 'primary' : 'inherit'} sx={{ fontSize: '0.8rem', padding: '6px 12px' }}>
          首页
        </Button>
        <Button component={Link} variant="text" to="/about" color={pathname === '/about' ? 'primary' : 'inherit'} sx={{ fontSize: '0.8rem', padding: '6px 12px' }}>
          关于
        </Button>
        <ThemeButton />
        {account.user ? (
          <Button component={Link} variant="contained" to="/login" color="primary" sx={{ fontSize: '0.8rem', padding: '6px 12px' }}>
            控制台
          </Button>
        ) : (
          <Button component={Link} variant="contained" to="/login" color="primary" sx={{ fontSize: '0.8rem', padding: '6px 12px' }}>
            登录
          </Button>
        )}
      </Stack>


    </>
  );
};

export default Header;
