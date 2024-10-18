document.addEventListener('DOMContentLoaded', function() {
    function traverseDOM(node, callback) {
        if (node) {
            const content = node.nodeType === Node.ELEMENT_NODE ? node.tagName : node.nodeValue;
            const next = confirm(`Ви на вузлі: ${content}. Продовжити до наступного вузла? (OK - далі, Отмена - назад)`);

            if (next && node.firstChild) {
                traverseDOM(node.firstChild, callback);
            } else if (!next && node.parentNode) {
                const back = confirm('Повернутися до попереднього вузла або завершити? (OK - повернутися, Отмена - завершити)');
                if (back) {
                    traverseDOM(node.parentNode, callback);
                }
            } else if (node.nextSibling) {
                const nextSibling = confirm('Перейти до наступного вузла на цьому рівні? (OK - так, Отмена - завершити)');
                if (nextSibling) {
                    traverseDOM(node.nextSibling, callback);
                }
            }
        }
    }

    const rootNode = document.body; // початок обходу з тега body
    traverseDOM(rootNode, function(node) {
        alert(`Вміст вузла: ${node.nodeName}`);
    });
});
