console.log("Global Scope");
for (var g_scope=1;g_scope<5;g_scope++)
{
console.log(g_scope);
}
console.log(g_scope); //Global Scope
console.log("Block Scope");
for (let b_scope=1;b_scope<5;b_scope++)
{
console.log(b_scope);
}


console.log(b_scope); // Error (Block Scope)