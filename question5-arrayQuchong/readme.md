#JavaScript面试第五题
*数据去重*
- set方法
1. 直接return [...new Set(arr)]

- indexOf()
1. 定义新数组存放拿出来的数据，相同的不push
2. 循环参数数组，判断在原数组中是否存在（或者是下次在查询相同数据的时候判断是否已经有过了），将数据push进result数组中存放
    if (result.indexOf(b[i]) === -1) {
            result.push(b[i])
    }

- includes方法
    if (!result.includes(c[i])) {
            result.push(c[i])
    }

- map() 方法
1. map.has()
2. map.set()

- reduce
1. return e.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], [])
