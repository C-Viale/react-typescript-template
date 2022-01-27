/* 
  Each item of NavigationConfig has an title and children.
  For better organization, children are defined in separated constants.

  Note that here there are not pages such as:
    Login page;
    Home page;
    "Forgot password" page;

  This is beacuse I made this as a side menu list config, and only later reutilize to work with react-router.
  That's why we must manually map these pages in Router.tsx.
*/

// Example
const reports:ListItem[] = [
  {
    id: 'page_sales',
    title: 'Sales',
    path: '/reports/sales'
  }
];

// This will be exported to Router.tsx and can be used to create an navigation menu
const NavigationConfig: Navigation = {
  reports:{
    title:'Reports',
    children: reports
  }
};

 
// Just some interfaces. Can be extended and/or exported depending of your use case.
interface Navigation {
  [key:string]: ListCategory
};

interface ListCategory {
  title: string
  children: ListItem[]
};

interface ListItem {
  id: string
  title: string
  path: string
  permission?: string
  icon?: JSX.Element
};

export default NavigationConfig;