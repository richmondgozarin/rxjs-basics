import { Observable, from, Subject, interval } from "rxjs";
import { map, pluck, skipUntil } from 'rxjs/operators';

/**
 * skipUntil
 */

var observable1 = Observable.create((data:any) => {
    var i = 1
    setInterval(() => {
        data.next(i++)
    }, 1000)
});

var observable2 = new Subject;

setTimeout(() => {
    observable2.next('Hey!');
}, 3000);

var newObs = observable1.pipe(skipUntil(observable2));

newObs.subscribe((x:any) => addItem(x))

/**
 * Pluck operator
 */

// from ([
//     {first: 'Rich', last: 'Gozarin', age: 34},
//     {first: 'John', last: 'Simon', age: 34},
//     {first: 'Jane', last: 'Abby', age: 34}
// ])
// .pipe(pluck('first'))
// .subscribe((x:any) => addItem(x));

/**
 * map operator
 */
// Observable.create((observer:any) => {
//     observer.next('hey guys');
// })
// .pipe(map((val:any) => val.toUpperCase()))
// .subscribe((x:any) => addItem(x));

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}