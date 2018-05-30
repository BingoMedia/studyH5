function Ma(a, n) {
    var A;
    var b = new Array();
    if (n == 1) {
        A = a[0][0];
        return A;
    }
    else if (n == 2) {
        A = a[0][0] * a[1][1] - a[0][1] * a[1][0];
        return A;
    }
    else if (n == 3) {
        A = a[0][0] * a[1][1] * a[2][2] +
            a[1][0] * a[2][1] * a[0][2] +
            a[2][0] * a[0][1] * a[1][2] -
            a[2][0] * a[1][1] * a[0][2] -
            a[0][0] * a[2][1] * a[1][2] -
            a[1][0] * a[0][1] * a[2][2];
        return A;
    } else {
        A = 0;
        var c = new Array();
        var e = new Array();
//计算第一行结果为1，-5，9，-3；
        for (var i = 0; i < n; i++) {
            b[i] = a[i][0] * power(-1, i + 1 + 1);
        }
//上面的循环没有问题
//把第一行除外的其他行的值从上向下，从左到右赋值给新的数组a[i][j]
        for (var i = 0; i < n; i++) {
            e[i] = new Array();
            for (var j = 0; j < n - 1; j++) {
                e[i][j] = a[i][j + 1];
            }
        }
//降阶后重组
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {

                c[j] = new Array();
                for (var k = 0; k < n - 1; k++) {
                    if (i > j) {
                        c[j][k] = e[j][k];
//主要把在之前的四阶降级为三阶，右下角三阶
                    }
                    else if (i < j) {
                        c[j - 1][k] = e[j][k];
                    }
                }
            }

            A += b[i] * arguments.callee(c, (n - 1));
        }
        return A;
    }
}