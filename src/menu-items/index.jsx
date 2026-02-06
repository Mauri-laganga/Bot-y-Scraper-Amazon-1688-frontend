// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [
    {
      id: 'opportunity-scout',
      title: 'Opportunity Scout',
      type: 'group',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/dashboard',
          icon: 'ph ph-house'
        },
        {
          id: 'opportunities',
          title: 'Oportunidades',
          type: 'item',
          url: '/opportunities',
          icon: 'ph ph-trend-up'
        },
        {
          id: 'scans',
          title: 'Escaneos',
          type: 'item',
          url: '/scans',
          icon: 'ph ph-clock'
        },
        {
          id: 'settings',
          title: 'Configuración',
          type: 'item',
          url: '/settings',
          icon: 'ph ph-gear'
        }
      ]
    }
  ]
};

export default menuItems;
