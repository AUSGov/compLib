export default {
  items: [
    // {
    //   name: 'Home',
    //   url: '/home',
    //   icon: 'icon-speedometer',
    //   badge: {
    //     variant: 'info',
    //     text: 'NEW'
    //   }
    // },
    {
      title: true,
      name: 'FOUNDATIONS',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Brand',
      url: '/theme/brand',
    },
    {
      name: 'Colors',
      url: '/theme/colors',
    },
    {
      name: 'Typography',
      url: '/theme/typography',
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {}
      },
    },
    {
      name: 'Base',
      url: '/base',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/base/breadcrumbs',
        },
        {
          name: 'Cards',
          url: '/base/cards',
        },
        {
          name: 'Carousels',
          url: '/base/carousels',
        },
        {
          name: 'Collapses',
          url: '/base/collapses'
        },
        {
          name: 'Dropdowns',
          url: '/base/dropdowns',
        },
        {
          name: 'Forms',
          url: '/base/forms',
        },
        {
          name: 'Jumbotrons',
          url: '/base/jumbotrons',
        },
        {
          name: 'List groups',
          url: '/base/list-groups',
        },
        {
          name: 'Navs',
          url: '/base/navs',
        },
        {
          name: 'Paginations',
          url: '/base/paginations',   
        },
        {
          name: 'Popovers',
          url: '/base/popovers',    
        },
        {
          name: 'Progress Bar',
          url: '/base/progress-bar',      
        },
        {
          name: 'Switches',
          url: '/base/switches',        
        },
        {
          name: 'Tables',
          url: '/base/tables',        
        },
        {
          name: 'Tabs',
          url: '/base/tabs',       
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips', 
        }
      ]
    },
    {
      name: 'Buttons',
      url: '/buttons',
    },
 /*         {
          name: 'Buttons',
          url: '/buttons/buttons',
          icon: 'icon-cursor'
        },
      {
          name: 'Button dropdowns',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor'
        },
        {
          name: 'Button groups',
          url: '/buttons/button-groups',
          icon: 'icon-cursor'
        },
        {
          name: 'Social Buttons',
          url: '/buttons/social-buttons',
          icon: 'icon-cursor'
        }*/
    {
      name: 'Charts',
      url: '/charts',
    },
    {
      name: 'Icons',
      url: '/icons',
      children: [
        {
          name: 'Flags',
          url: '/icons/flags',
          badge: {
            variant: 'success',
            text: 'NEW'
          }
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
        }
      ]
    },
    {
      name: 'Notifications',
      url: '/notifications',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
        },
      ]
    },
    {
      name: 'Widgets',
      url: '/widgets',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/pages',
      children: [
        // {
        //   name: 'Login',
        //   url: '/login',
        // },
        // {
        //   name: 'Register',
        //   url: '/register',
        // },
        {
          name: 'Error 404',
          url: '/404',
        },
        {
          name: 'Error 500',
          url: '/500',
        }
      ]
    },
  ]
};
