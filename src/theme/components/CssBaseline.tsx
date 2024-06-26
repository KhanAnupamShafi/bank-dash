import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import 'simplebar-react/dist/simplebar.min.css';
import simplebar from 'theme/styles/simplebar';

const CssBaselineComponent: Components<Omit<Theme, 'components'>>['MuiCssBaseline'] = {
  defaultProps: {},
  styleOverrides: (theme) => ({
    body: {
      fontVariantLigatures: 'none',
      '&:-webkit-autofill': {
        '-webkit-box-shadow': '0 0 0 100px #000 inset',
        '-webkit-text-fill-color': '#fff',
      },
      //   ...scrollbar(theme),
    },
    ...simplebar(theme),
    // ...echart(),
  }),
};

export default CssBaselineComponent;
