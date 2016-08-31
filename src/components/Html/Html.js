/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component, PropTypes } from 'react';
import { googleAnalyticsId } from '../../config';

class Html extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    css: PropTypes.string,
    body: PropTypes.string.isRequired,
  };

  static defaultProps = {
    title: '',
    description: '',
  };

  trackingCode() {
    return ({__html:
      `(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=` +
      `function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;` +
      `e=o.createElement(i);r=o.getElementsByTagName(i)[0];` +
      `e.src='https://www.google-analytics.com/analytics.js';` +
      `r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));` +
      `ga('create','${googleAnalyticsId}','auto');ga('send','pageview');`,
    });
  }

  //Google Analytics Content Experiment code
  TEST_SETUP(){
    return({
      __html:`
      function utmx_section(){}function utmx(){}(function(){var
      k='110079493-3',d=document,l=d.location,c=d.cookie;
      if(l.search.indexOf('utm_expid='+k)>0)return;
      function f(n){if(c){var i=c.indexOf(n+'=');if(i>-1){var j=c.
      indexOf(';',i);return escape(c.substring(i+n.length+1,j<0?c.
      length:j))}}}var x=f('__utmx'),xx=f('__utmxx'),h=l.hash;d.write(
      '<sc'+'ript src="'+'http'+(l.protocol=='https:'?'s://ssl':
      '://www')+'.google-analytics.com/ga_exp.js?'+'utmxkey='+k+
      '&utmx='+(x?x:'')+'&utmxx='+(xx?xx:'')+'&utmxtime='+new Date().
      valueOf()+(h?'&utmxhash='+escape(h.substr(1)):'')+
      '" type="text/javascript" charset="utf-8"><\/sc'+'ript>')})();`
    });
  }
  TEST_SEND(){
    return({
      __html:`utmx('url','A/B');`
    });
  }

  render() {
    return (
      <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=0" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="alternate" href="http://app.pagamo.org/en" hrefLang="en" />
        <link rel="alternate" href="http://app.pagamo.org/cn" hrefLang="zh-Hans" />
        <link rel="alternate" href="http://app.pagamo.org/tw" hrefLang="zh-Hant" />
        <link href='//fonts.googleapis.com/css?family=Source+Sans Pro:400|Varela+Round:400' rel='stylesheet' type='text/css' />
        <style id="css" dangerouslySetInnerHTML={{__html: this.props.css}} />
        <script src="jsfont.js" />
        <script dangerouslySetInnerHTML={this.TEST_SETUP()} />
        <script dangerouslySetInnerHTML={this.TEST_SEND()} />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{__html: this.props.body}} />
        <script src="tweenmax.min.js" />
        <script src="/app.js"></script>
        <script dangerouslySetInnerHTML={this.trackingCode()} />
      </body>
      </html>
    );
  }

}

export default Html;
