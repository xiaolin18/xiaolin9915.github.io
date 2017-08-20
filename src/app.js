import Layer from './components/layer.js';
import $ from 'jquery';

const App = function() {
  var dom = document.getElementById('app');
  var layer = new Layer();
  dom.innerHTML = layer.tpl;
}

App();
