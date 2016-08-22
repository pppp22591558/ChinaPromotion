/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Router from 'react-routing/src/Router';
import http from './core/HttpClient';
import App from './components/App';
import ContentPage from './components/ContentPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import NotFoundPage from './components/mobile/NotFoundPage';
import ErrorPage from './components/mobile/ErrorPage';
import SignupPage from './components/SignupPage';
import Content from './components/Content';
import FistLaunch from './components/versions/Launch-v1.0.0';
import { get as getContent } from './constants/ABTest';

const router = new Router(on => {
  on('/launch-v1.0.0', async (state) => {
    state.context.onSetTitle('China Promotion');
    return <FistLaunch context={state.context}/>
  });

  on('/:version', async(state) => {
    let version = state.params.version
    const { title } = getContent(version)
    state.context.onSetTitle(title);
    return <App context={state.context} version={version}/>
  });

  // on('*', async (state) => {
  //   const content = await http.get(`/api/content?path=${state.path}`);
  //   return content && <ContentPage {...content} />;
  // });

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );
});

export default router;
