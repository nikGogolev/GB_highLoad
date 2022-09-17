const arr = [];
const set = new Set();
const length = 1000000;

let t0 = performance.now();
for (let i = 0; i < length; i++) {
  arr.push(i);
}
let t1 = performance.now();
console.log("array add", t1 - t0, `ms/${length}`);

t0 = performance.now();
for (let i = 0; i < length; i++) {
  set.add(i);
}
t1 = performance.now();
console.log("set add", t1 - t0, `ms/${length}`);

t0 = performance.now();
for (let i = 0; i < length; i++) {
  arr.pop();
}
t1 = performance.now();
console.log("array delete", t1 - t0, `ms/${length}`);

t0 = performance.now();
for (let i = 0; i < length; i++) {
  set.delete(i);
}
t1 = performance.now();
console.log("set delete", t1 - t0, `ms/${length}`);

t0 = performance.now();
for (let i = 0; i < length; i++) {
  arr.indexOf(i);
}
t1 = performance.now();
console.log("array search", t1 - t0, `ms/${length}`);

t0 = performance.now();
for (let i = 0; i < length; i++) {
  set.has(i);
}
t1 = performance.now();
console.log("set search", t1 - t0, `ms/${length}`);
