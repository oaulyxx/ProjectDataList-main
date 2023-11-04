import Vue from 'vue'
import Router from 'vue-router'

// Index
import Index from '@/components/Iron/Index'

// height130up
import height130upIndex from '@/components/Iron/Index/IndexHeight130up'
import height130upCreate from '@/components/Iron/Create/CreateHeight130up'
import height130upEdit from '@/components/Iron/Edit/EditHeight130up'
import height130upShow from '@/components/Iron/Show/ShowHeight130up'

// Philips
import PhilipsIndex from '@/components/Iron/Index/IndexPhilips'
import PhilipsCreate from '@/components/Iron/Create/CreatePhilips'
import PhilipsEdit from '@/components/Iron/Edit/EditPhilips'
import PhilipsShow from '@/components/Iron/Show/ShowPhilips'

// Tefal
import TefalIndex from '@/components/Iron/Index/IndexTefal'
import TefalCreate from '@/components/Iron/Create/CreateTefal'
import TefalEdit from '@/components/Iron/Edit/EditTefal'
import TefalShow from '@/components/Iron/Show/ShowTefal'

// height155up
import height155upIndex from '@/components/Iron/Index/IndexHeight155up'
import height155upCreate from '@/components/Iron/Create/CreateHeight155up'
import height155upEdit from '@/components/Iron/Edit/EditHeight155up'
import height155upShow from '@/components/Iron/Show/ShowHeight155up'

Vue.use(Router)

export default new Router({
  routes: [
    // Index
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    
    // height130up
    {
      path: '/height130ups',
      name: 'height130ups',
      component: height130upIndex
    },
    {
      path: '/height130up/create',
      name: 'height130up-create',
      component: height130upCreate
    },
    {
      path: '/height130up/edit/:height130upId',
      name: 'height130up-edit',
      component: height130upEdit
    },
    {
      path: '/height130up/:height130upId',
      name: 'height130up',
      component: height130upShow
    },

    // Philips
    {
      path: '/philipss',
      name: 'philipss',
      component: PhilipsIndex
    },
    {
      path: '/philips/create',
      name: 'philips-create',
      component: PhilipsCreate
    },
    {
      path: '/philips/edit/:philipsId',
      name: 'philips-edit',
      component: PhilipsEdit
    },
    {
      path: '/philips/:philipsId',
      name: 'philips',
      component: PhilipsShow
    },

    // Tefal
    {
      path: '/tefals',
      name: 'tefals',
      component: TefalIndex
    },
    {
      path: '/tefal/create',
      name: 'tefal-create',
      component: TefalCreate
    },
    {
      path: '/tefal/edit/:tefalId',
      name: 'tefal-edit',
      component: TefalEdit
    },
    {
      path: '/tefal/:tefalId',
      name: 'tefal',
      component: TefalShow
    },

    // height155up
    {
      path: '/height155ups',
      name: 'height155ups',
      component: height155upIndex
    },
    {
      path: '/height155up/create',
      name: 'height155up-create',
      component: height155upCreate
    },
    {
      path: '/height155up/edit/:height155upId',
      name: 'height155up-edit',
      component: height155upEdit
    },
    {
      path: '/height155up/:height155upId',
      name: 'height155up',
      component: height155upShow
    },

    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    //  },
  ]
})
