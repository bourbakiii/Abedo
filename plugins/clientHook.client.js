console.object = function(text){
  console.log('the text is ');
  console.log(text);
}
export default async context => {
  await context.store.dispatch('clientHook', context);
  }