import React from 'react';
import type { MenuItem } from './types';
import { CartIcon } from './components/Icons';

export const NAVBAR_LEFT_ITEMS: MenuItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'News', href: '#news' },
  {
    name: 'Music',
    href: '#music',
    subMenus: [
      {
        title: 'Releases',
        items: [
          { name: 'Albums', href: '#albums' },
          { name: 'EPs', href: '#eps' },
          { name: 'Mixtapes', href: '#mixtapes' },
        ],
      },
      {
        title: 'Specials',
        items: [
          { name: 'DJ Mix', href: '#dj-mix' },
          { name: 'Lost Tapes', href: '#lost-tapes' },
          { name: 'Leaked Tapes', href: '#leaked-tapes' },
        ],
      },
    ],
  },
  {
    name: 'Sports',
    href: '#sports',
    subMenus: [
      {
        title: 'Football',
        items: [
          { name: 'Local Football', href: '#local-football' },
          { name: 'International', href: '#international-football' },
        ],
      },
      {
        title: 'Extras',
        items: [
          { name: 'Tables', href: '#tables' },
          { name: 'Featured Video', href: '#featured-video' },
        ],
      },
    ],
  },
  { name: 'Films', href: '#films' },
  { name: 'Events', href: '#events' },
];

export const NAVBAR_RIGHT_ITEMS: MenuItem[] = [
  { name: 'Fashion', href: '#fashion' },
  { name: 'Lifestyle', href: '#lifestyle' },
  { name: 'Education', href: '#education' },
  { name: 'Arts & Culture', href: '#arts-culture' },
  { name: 'Podcast', href: '#podcast' },
  { name: 'Exclusive', href: '#exclusive' },
  { name: 'Store', href: '#store', isIcon: true, icon: React.createElement(CartIcon) },
];


export const SIDEBAR_MENU_ITEMS: MenuItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'News', href: '#news' },
  {
    name: 'Music',
    href: '#music',
    subMenus: [
      {
        title: '',
        items: [
          { name: 'Albums', href: '#albums' },
          { name: 'EPs', href: '#eps' },
          { name: 'Mixtapes', href: '#mixtapes' },
        ]
      }
    ]
  },
  {
    name: 'Sports',
    href: '#sports',
    subMenus: [
      {
        title: '',
        items: [
          { name: 'Local Football', href: '#local-football' },
          { name: 'International', href: '#international' },
        ]
      }
    ]
  },
  { name: 'Films', href: '#films' },
  { name: 'Events', href: '#events' },
  { name: 'Fashion', href: '#fashion' },
  { name: 'Arts & Culture', href: '#arts-culture' },
  { name: 'Podcast', href: '#podcast' },
  { name: 'Store', href: '#store', isIcon: true, icon: React.createElement(CartIcon) },
];