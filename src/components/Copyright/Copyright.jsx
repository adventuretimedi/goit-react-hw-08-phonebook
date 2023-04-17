import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/diana-peretyatko-/"
      >
        Peretiatko Diana
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
