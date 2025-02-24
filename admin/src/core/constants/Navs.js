// Libraries
import React from 'react';

// Maintenance
const Category = React.lazy(() => import('pages/main/maintenance/category'));
const Breed = React.lazy(() => import('pages/main/maintenance/breed'));
const Pets = React.lazy(() => import('pages/main/maintenance/pets'));
const Users = React.lazy(() => import('pages/main/maintenance/users'));

export const Navs = () => ([
    {
        title: 'Main', nav: [
            { path: '/', label: 'Dashboard', name: 'home', component: 'DASHBOARD'  }
        ]
    },
    {
        title: 'Tools', nav: [
            { path: '/tools/announcement', label: 'Announcements', name: 'announcement', component: 'ANNOUNCEMENT' },
            { path: '/tools/missing', label: 'Missing Pets', name: 'missing-pets', component: 'MISSING PETS' },
            { path: '/tools/adopt', label: 'Adopt Pet', name: 'adopt-pet', component: 'ADOPT PET' }
        ]
    },
    {
        title: 'Maintenance', nav: [
            { path: '/maintenance/category', label: 'Category', name: 'category', component: <Category /> },
            { path: '/maintenance/breed', label: 'Breed', name: 'breed', component: <Breed /> },
            { path: '/maintenance/pet', label: 'Pets', name: 'pets', component: <Pets /> },
            { path: '/maintenance/users', label: 'Users', name: 'Users', component: <Users /> }
        ]
    }
])