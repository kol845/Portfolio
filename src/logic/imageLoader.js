// Could not make dynamic importing work. This file is not used.
function importAll(r) {
    return r.keys().map(r);
}
  
export default importAll(require.context('./../images/portfolio/cases', false,  /\.(png|jpe?g|svg)$/));