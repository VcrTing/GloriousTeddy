export default {
    // 兩位小數點
    numberFixed(src: number) {
        return isNaN(src) ? Number.parseFloat(src + '') : parseFloat(src.toFixed(2))
    },

    // 加法
    floatAdd(arg1: number, arg2: number) {
        let r1, r2, m
        try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = arg2.toString().split(".")[1].length } catch(e){ r2 = 0 }
        m = Math.pow(10, Math.max(r1, r2))
        return (arg1 * m + arg2 * m) / m
    },
    // 减法
    floatSub(arg1: number, arg2: number) {
        let r1, r2, m, n
        try{ r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
        m = Math.pow(10, Math.max(r1, r2))
        n = ( r1 = r2 ) ? r1: r2
        return ((arg1 * m - arg2 * m) / m).toFixed(n)
    },
    // 乘法
    floatMul(arg1: number, arg2: number ) {
        let m = 0, s1 = arg1.toString(), s2 = arg2.toString()
        try { m += s1.split(".")[1].length } catch (e) { }
        try { m += s2.split(".")[1].length } catch (e) { }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
    },
    // 除法
    floatDiv(arg1: number, arg2: number) {
        let t1 = 0, t2 = 0, r1, r2;
        try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
        try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
    
        r1 = Number(arg1.toString().replace(".", ""))
        r2 = Number(arg2.toString().replace(".", ""))
        return (r1 / r2) * Math.pow(10, t2 - t1)
    }
}