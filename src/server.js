/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import 'babel-core/polyfill';
import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Router from './routes';
import Html from './components/Html';
import cookieParser from 'cookie-parser';

const server = global.server = express();

server.set('port', (process.env.PORT || 4000));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

//
// Register API middleware
// -----------------------------------------------------------------------------
server.use('/api/content', require('./api/content'));

server.get('/ios-download', (req, res) => {
  const { version } = req.query;
  let url = '';
  if (version === 'us' || version === 'tw') {
    url = 'https://itunes.apple.com/app/pagamo/id1114434167';
  } else {
    url = 'https://itunes.apple.com/cn/app/pagamo-china/id1079252424';
  }
  res.redirect(url);
});

server.get('/download', (req, res, next) => {
  try {
    const file = __dirname + '/public/PaGamO_v0.6.8_production.apk';
    res.download(file, 'PaGamO_v0.6.8_production.apk');
  } catch (err) {
    next(err);
  }
});

server.get('/switch', async(req, res, next) => {
  try {
    const { to } = req.query;
    res.cookie('prefer-language', to, { httpOnly: true });
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
import languageCheck from './core/languageCheck';
server.get('*', languageCheck, async (req, res, next) => {
  try {
    let statusCode = 200;
    const data = { title: 'PaGamO App', description: '', css: '', body: '' };
    const css = [];
    const context = {
      onInsertCss: value => css.push(value),
      onSetTitle: value => data.title = value,
      onSetMeta: (key, value) => data[key] = value,
      onPageNotFound: () => statusCode = 404,
    };

    await Router.dispatch({ path: req.path, version: req.version, context }, (state, component) => {
      data.body = ReactDOM.renderToString(component);
      data.css = css.join('');
    });

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(statusCode).send('<!doctype html>\n' + html);
  } catch (err) {
    next(err);
  }
});

//
// Launch the server
// -----------------------------------------------------------------------------

server.listen(server.get('port'), () => {
  /* eslint-disable no-console */
  console.log('The server is running at http://localhost:' + server.get('port'));
  if (process.send) {
    process.send('online');
  }
});
