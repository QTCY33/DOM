const div = dom.create('<div>hi</div>')
console.log(div);

dom.after(test, div)

const div3 = dom.create('<div id="parent"></div>')
dom.warp(test, div3)

const nodes = dom.empty(window.empty)
console.log(nodes);

dom.attr(test,'title','hi I am ❤')
const title = dom.attr(test, 'title')
console.log(`title:${title}`);

dom.text(test,'这是新的内容')
dom.text(test)

dom.style(test,{border: '1px solid red', color:'blue'})
console.log(dom.style(test, 'border'))
dom.style(test,'border','1px solid red')

dom.class.add(test,'red')
