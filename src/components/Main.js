import React from 'react';
import { Tab, Icon, Menu } from 'semantic-ui-react'
import Home from './Home'
import Projects from './Projects'
import Demos from './Demos'
import Resume from './Resume'
import Contact from './Contact'

const panes = [
  { menuItem: { key: 'home', icon: 'home', content: 'Home' }, render: () => <Tab.Pane><Home/></Tab.Pane> },
  { menuItem: { key: 'projects', icon: 'wrench', content: 'Projects' }, render: () => <Tab.Pane><Projects /></Tab.Pane> },
  // { menuItem: { key: 'demos', icon: 'wrench', content: 'Demos' }, render: () => <Tab.Pane><Demos /></Tab.Pane> },
  { menuItem: { key: 'resume', icon: 'address card', content: 'Resume' }, render: () => <Tab.Pane><Resume /></Tab.Pane> },
  { menuItem: { key: 'contact', icon: 'mail outline', content: 'Contact' }, render: () => <Tab.Pane><Contact /></Tab.Pane> },
  { menuItem: <a href='https://www.tumblr.com/blog/kaalm1' target='_blank' rel="noopener noreferrer"><Menu.Item key='blog'><Icon name='browser'/>Blog</Menu.Item></a>},
  { menuItem: <a href='https://github.com/kaalm1/' target='_blank' rel="noopener noreferrer"><Menu.Item key='github'><Icon name='github'/>GitHub</Menu.Item></a>, render: () => <Tab.Pane /> },
  { menuItem: <a href='https://www.linkedin.com/in/joe-teichman/' target='_blank' rel="noopener noreferrer"><Menu.Item key='linkedin'><Icon name='linkedin' />LinkedIn</Menu.Item></a>, render: () => <Tab.Pane /> },
]


const Main = () => (
  <Tab panes={panes} />
)


export default Main;
