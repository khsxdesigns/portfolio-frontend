(window.webpackJsonp=window.webpackJsonp||[]).push([[16,17],{"oUq+":function(n,r,e){"use strict";var t=e("9Hrx"),o=e("q1tI"),c=e.n(o),i=function(n){function r(){for(var r,e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return(r=n.call.apply(n,[this].concat(t))||this).ref=c.a.createRef(),r.componentDidMount=function(){var n=new IntersectionObserver((function(n){n[0].intersectionRatio>0&&r.props.onVisible()}),{root:null,rootMargin:"0px",threshold:r.props.threshold});r.ref.current&&n.observe(r.ref.current)},r.render=function(n){return c.a.createElement("div",{ref:r.ref},r.props.children)},r}return Object(t.a)(r,n),r}(c.a.Component);r.a=i}}]);