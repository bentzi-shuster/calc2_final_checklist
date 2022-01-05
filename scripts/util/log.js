let log = (...stuff) => {

    console.log('%c'+'  '+stuff+'  ', 'font-weight: bold;');
}
log.successfulyLoaded = (...stuff) => {
    console.log('%c'+'  '+stuff+'  ', 'color:#041408 ; font-weight: bold;background-color:#49be25;');
}
log.error = (...stuff) => {
    console.error(stuff);
}
log.warn = (...stuff) => {
    console.warn(stuff);
}
log.info = (...stuff) => {
    console.info(stuff);
}
log.debug = (...stuff) => {
    console.debug(stuff);
}
log.trace = (...stuff) => {
    console.trace(stuff);
}
log.dir = (...stuff) => {
    console.dir(stuff);
}
log.time = (...stuff) => {
    console.time(stuff);
}
log.timeEnd = (...stuff) => {
    console.timeEnd(stuff);
}
log.group = (...stuff) => {
    console.group(stuff);
}
log.groupEnd = (...stuff) => {
    console.groupEnd(stuff);
}
log.groupCollapsed = (...stuff) => {
    console.groupCollapsed(stuff);
}
log.assert = (...stuff) => {
    console.assert(stuff);
}
log.count = (...stuff) => {
    console.count(stuff);
}
log.clear = (...stuff) => {
    console.clear(stuff);
}
log.successfulyLoaded("log.js loaded successfully");
export default log;