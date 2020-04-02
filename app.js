'use strict'

const number = process.argv[2] || 0 //process.argv[0]=nodeコマンドのパス, [1] =実行しているプログラムのパス, [2] =コマンドライン引数で渡される値 // process.argv[2]がfalsyな値なら0を代入
let sum = 0
for (let i = 1; i <= number; i++) {
  sum = sum + i //(1+2+3+...+100=5050)
}
console.log(sum)
