import $ from 'jquery'
$('.app').css('color', 'red')

globalLib({x:1})
globalLib.doSomething()

import moduleLib from './moudle-lib'

moduleLib.doSomething();

