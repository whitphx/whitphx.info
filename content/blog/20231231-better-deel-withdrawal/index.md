---
title: "DeelのUSD出金とJPY出金"
date: "2023-12-31T18:32:20+09:00"
description:
tags: []
lang: ja
---

個人的なメモ。内容の正確性に保証はない。

DeelでクライアントからUSDで支払われた収入を日本円で受け取りたい。

出金方法はおそらく次の二つ。
1. USDでBank Transfer。外貨口座に振り込み、そこで日本円に両替。
2. JPYでBank Transfer。日本円口座に振り込み。

他の出金方法はJPYに対応していない。
また仮にWiseなどでUSD出金したとしても、日本国内で日本円現金を得るためには結局そこからBank Transferしなければいけない…はず？なので。

受け取り口座はJPY、USDともにソニー銀行を想定。Prestiaより外貨口座の為替手数料が安い。

DeelでJPY出金する際（上記2.）には、Withdraw画面で出金額を入力すると"Exchange to"の欄に最終的な日本円での出金額が表示されるので、それを確認する。
ここに罠があり、withdraw method選択時にはJPY出金だとProvider feeが0だと表示されておりそちらに誘導されそうになるが、
いざ出金の際に明細を見ると（"Exchange to"の欄のℹ️ボタンから見れる）、Exchange feeが取られており、これがUSD出金時のProvider feeを大きく上回りうる（USD出金のProvider feeはUSD5-10。一方、JPY出金時のExchange feeは100USD近く取られることがある）。

この数値を、USD出金してソニー銀行で両替した場合（上記1.）の額と比較する。

1, 2の優劣はタイミングによって変わる。
* 適用される金利の優劣がタイミングによって変わる。
* なので、両方を登録しておいて、得な方を選ぶのが良い。
* ただし着金までの時間に差がある。JPY出金の場合、Deelで手続きしてから数時間後には着金した。USD出金の場合、Deelで手続きしてから着金まで3日程度かかる。大きく為替変動がありそうな場合、この辺りも考慮事項になる。
