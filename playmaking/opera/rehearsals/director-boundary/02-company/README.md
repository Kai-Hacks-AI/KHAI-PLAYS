# Pinned Inputs, Hashes, and Run Promptbooks

Locked before staging at branch tip `b6ee4b4cd281d8a2017569f95f8f863b40507a49` (incorporating merged PR #24 baseline `ec1d8730e14eb41501284b233fbafcd5f3690cd6`). Historical PR #24 [promptbook.md](../../director-promptbook/02-company/promptbook.md) (`sha256: da71b581f42b814164ad45f4a934110d3fc20611053bf5c1ef7c7be8cae3a949`) remains untouched.

---

## 1. Promptbook Normalization & Exact Single-Value Diff

Because historical [director-promptbook/02-company/promptbook.md](../../director-promptbook/02-company/promptbook.md) was authored for PR #24's fixed-`0%` brief—repeating `0%` in lines 3, 7, and 35 and baking `"the Director does not invent external events"` inline on line 32—we prepared a common limit-neutral rehearsal copy referencing [system.md#staging-limit](../../../skills/khai-director/references/system.md#staging-limit) while keeping all shared safeguards for authored facts, constraints, roles, Process rules, knowledge isolation, and open performer choices, then generated:

- **Condition A (`0%`):** [promptbook-a-0pct.md](promptbook-a-0pct.md) — `sha256: dbd560d670e5bcd5b7f0af73b9cf02ea0074ccd58ef48ef46dde0fcf10cb80b8`
- **Condition B (`50%`):** [promptbook-b-50pct.md](promptbook-b-50pct.md) — `sha256: d23faf4a213de5380ea3a8fbb73d27f91aec2545541061f964fd7b4880615535`

Verified `diff -U 0 promptbook-a-0pct.md promptbook-b-50pct.md` (differing strictly and solely in `0` vs `50` on line 32):

```diff
@@ -32 +32 @@
-- **Staging limit: 0%.** Apply this ceiling per the Director [staging-limit guide](../../../skills/khai-director/references/system.md#staging-limit). Keep authored facts, constraints, roles, and Process rules fixed unless the staging limit permits adapting them and the Human explicitly opens them up, and leave performers in charge of the choices the Play leaves open.
+- **Staging limit: 50%.** Apply this ceiling per the Director [staging-limit guide](../../../skills/khai-director/references/system.md#staging-limit). Keep authored facts, constraints, roles, and Process rules fixed unless the staging limit permits adapting them and the Human explicitly opens them up, and leave performers in charge of the choices the Play leaves open.
```

---

## 2. Director Skill & Reference Hashes (`ec1d8730e14eb41501284b233fbafcd5f3690cd6`)

| File | SHA-256 |
| --- | --- |
| [khai-director/SKILL.md](../../../skills/khai-director/SKILL.md) | `6495fc8a59ef5f9f357f08b53755bd92c5d2fa30c18be2c7ef6d0927b4893a52` |
| [khai-director/references/promptbook.md](../../../skills/khai-director/references/promptbook.md) | `ed670efdc0a564a11b3e63b485847692ba4845e0685e4ee944f9bdf7e5df1459` |
| [khai-director/references/human.md](../../../skills/khai-director/references/human.md) | `0c9752d97ecfa2169091dec90a21f1b4cba8a2ca43af11d3318c719b0192d0c1` |
| [khai-director/references/agent.md](../../../skills/khai-director/references/agent.md) | `3f7887dba6dbff0d12164e89e74f84e60e05ec309e98932342e4fa870992f8ef` |
| [khai-director/references/collaboration.md](../../../skills/khai-director/references/collaboration.md) | `3c0571e81b508bf9539d8a4ce36b0abf34ba1bf1f760205b590951737c90f18b` |
| [khai-director/references/knowledge.md](../../../skills/khai-director/references/knowledge.md) | `864faae78a0b299e3b4c30bd0535119017593576e6bb51d0b786f7675db5c986` |
| [khai-director/references/system.md](../../../skills/khai-director/references/system.md) | `275d0eedf7190c03d59beafaf1aaea41fc2b241125122c52f328b62745fc1af4` |
| [khai-director/references/performance.md](../../../skills/khai-director/references/performance.md) | `f8274a772b5c89d7d29b34e7be09ed5f992d4d0509e84cb369ea2cf41487bf0f` |
| [khai-playwright/references/pitch.md](../../../skills/khai-playwright/references/pitch.md) | `8271b7e4973f58f2667f7e03e62ecdb231ba175e0851524783c5976249ce437e` |

---

## 3. Opening 1 Authored Inputs — *Frost Line at Glasshouse Three* (`15` files)

| File | SHA-256 |
| --- | --- |
| [play.md](../../director-promptbook/02-company/greenhouse-frost/play.md) | `375e7440e607f5dff53c1bb7fe4ad85ee795488d5f35b1d8101583b67862cd3c` |
| [plot-1-boiler-vault.md](../../director-promptbook/02-company/greenhouse-frost/plot-1-boiler-vault.md) | `2828690156d3985dcbe9748cdd7c0ecef307c690ce45b0e767d98d404eec7f5c` |
| [plot-2-corridor-bell.md](../../director-promptbook/02-company/greenhouse-frost/plot-2-corridor-bell.md) | `4ad938f3aecaf83ee2336e1f5c249fccc6cae032c748d5cac9b917d4b158139a` |
| [soren.md](../../director-promptbook/02-company/greenhouse-frost/soren.md) | `66f3d1bcf1ca9c85dff031af9700953d41945686dc3ca4ffc3cd1045582417ca` |
| [ines.md](../../director-promptbook/02-company/greenhouse-frost/ines.md) | `65c793d728dfbf77f871a4472ee710fa6496058b9329fafcc4e36ce4ae0b95ac` |
| [night-boiler-attendant.md](../../director-promptbook/02-company/greenhouse-frost/night-boiler-attendant.md) | `0b788a14637f1b12690549e66721b776bb5cf8351064ef2cc5b7acc2c9fdf163` |
| [visiting-citrus-curator.md](../../director-promptbook/02-company/greenhouse-frost/visiting-citrus-curator.md) | `de64f1fa6738ff5310d4547488153fbadc5bf2811a200d0ab1b06258289376ca` |
| [boiler-vault.md](../../director-promptbook/02-company/greenhouse-frost/boiler-vault.md) | `3bcbc11dec6863b8f0cd709d656d29b9085bbacdc516cd0ca9c7f9dae5e31252` |
| [glasshouse-three-corridor.md](../../director-promptbook/02-company/greenhouse-frost/glasshouse-three-corridor.md) | `d533898c569455d457265a9db6a80cd5eb1ad1f079948de1f79d64f0e702ca2d` |
| [steam-manifold.md](../../director-promptbook/02-company/greenhouse-frost/steam-manifold.md) | `46964060da28a55be195264530078265e12929e8ffa61a9c5499f0bc388093c0` |
| [night-logbook.md](../../director-promptbook/02-company/greenhouse-frost/night-logbook.md) | `257043dba04791fdbd506db5184fe8413bc035b2662a2d05868cba4469989340` |
| [feed-line-freeze.md](../../director-promptbook/02-company/greenhouse-frost/feed-line-freeze.md) | `54cd6e726711338dd04a22ce4070a723f737c2d1351f7a28443e030de2cac334` |
| [plan-soren-watch.md](../../director-promptbook/02-company/greenhouse-frost/plan-soren-watch.md) | `06c42b6193030ff52459eea9e7951548a5b0cf76b8203ed0933431ea2ba1a26f` |
| [plan-ines-curation.md](../../director-promptbook/02-company/greenhouse-frost/plan-ines-curation.md) | `0346feb3c44c5bdf65f086e42e2ffeff2b7bc3b88b8cea27463bbdf2b17a7da6` |
| [pitch-botanical-realism.md](../../director-promptbook/02-company/greenhouse-frost/pitch-botanical-realism.md) | `bc5b9094f1cb8b8f2084d29aad359e21dfd4e423d00fd239b3940fa469b541a7` |

---

## 4. Opening 2 Authored Inputs — *Hold Three on the Ebb* (`18` files)

| File | SHA-256 |
| --- | --- |
| [play.md](../../director-promptbook/02-company/harbor-manifest/play.md) | `faf952be4b2e1e0ce40ab02aab8760020062add0498b0245772ca6935a5a1afd` |
| [plots/plot-1-the-replaced-tag.md](../../director-promptbook/02-company/harbor-manifest/plots/plot-1-the-replaced-tag.md) | `429769cf8e2ace82bbea27126f45f2e65c506fae68a29b65354574f1a5026de7` |
| [plots/plot-2-the-five-minute-bell.md](../../director-promptbook/02-company/harbor-manifest/plots/plot-2-the-five-minute-bell.md) | `143416cc825ec99742fb7b3cdf98b0bf6826df16683596c807e177e1b8e78b49` |
| [personas/mara-lin.md](../../director-promptbook/02-company/harbor-manifest/personas/mara-lin.md) | `9f8f3284fcba9aa3788e969ccac32dd7fe9c184f2e0d5a7506e6622a32c59eb8` |
| [personas/owen-hale.md](../../director-promptbook/02-company/harbor-manifest/personas/owen-hale.md) | `bd75fba916e98b97243b2b9e01d0106be20f30f5d9b32a557b403ceff91db17a` |
| [personas/callum-reed.md](../../director-promptbook/02-company/harbor-manifest/personas/callum-reed.md) | `6124003af04a705b6ffb7d2ecf3963909c6755888c4ba6a6082aba64dd6a0659` |
| [positions/duty-boarding-officer.md](../../director-promptbook/02-company/harbor-manifest/positions/duty-boarding-officer.md) | `d8c4bbf6c2c3b4f09bf7e3d243f5f3d7634e29f5fabe141005baa761bfe65bb6` |
| [positions/harbor-manifest-clerk.md](../../director-promptbook/02-company/harbor-manifest/positions/harbor-manifest-clerk.md) | `0c9fd1336d64c0fe298a1132a987faf17b3c6c7975560b5cc34af79be6842bfd` |
| [positions/first-mate.md](../../director-promptbook/02-company/harbor-manifest/positions/first-mate.md) | `a175d298313f39672536146895ad54488d92b541f4b3a35db2d731924e1417ce` |
| [places/tide-gate-customs-office.md](../../director-promptbook/02-company/harbor-manifest/places/tide-gate-customs-office.md) | `6627112cae6d23c4729f5047cc51e6686a014d76936abb0270fb78f8886a60b8` |
| [pieces/wire-seal-tag-774.md](../../director-promptbook/02-company/harbor-manifest/pieces/wire-seal-tag-774.md) | `b0a947811ab44d0b63302fba8ead60344e1e57d4a00345e3b5d9386a6b0637a3` |
| [pieces/port-clearance-sheet.md](../../director-promptbook/02-company/harbor-manifest/pieces/port-clearance-sheet.md) | `645969e094ca1fb52cfea8d524a9fc00e2e15a450c85cd23e123a31a6ed77d64` |
| [pieces/clearance-stamp.md](../../director-promptbook/02-company/harbor-manifest/pieces/clearance-stamp.md) | `d9c8c548b264dc419a8e5f67f2c62e9b34646e935dec687062b3aabafff84219` |
| [processes/ebb-sill-clearance.md](../../director-promptbook/02-company/harbor-manifest/processes/ebb-sill-clearance.md) | `c229310941b7d0f9e5e3d63bad71ab616467b844df87003233153232d1459a43` |
| [plans/mara-verify-before-stamp.md](../../director-promptbook/02-company/harbor-manifest/plans/mara-verify-before-stamp.md) | `d903be0562c9e182563bb631bc2456582ffd3ccd27f341906220acc1055a7984` |
| [plans/owen-reconcile-the-register.md](../../director-promptbook/02-company/harbor-manifest/plans/owen-reconcile-the-register.md) | `be52bd5e472c4cc0d26cd78a771c3289bff7a27f4c6ac247dae74d619f009de2` |
| [plans/callum-clear-the-sill.md](../../director-promptbook/02-company/harbor-manifest/plans/callum-clear-the-sill.md) | `25c499c43ca185196b8558007df8d33717094c85ae544bc6faf26ebb5632032b` |
| [pitches/maritime-procedural-realism.md](../../director-promptbook/02-company/harbor-manifest/pitches/maritime-procedural-realism.md) | `281c067351ebf40d6becd77bee1b1d59169d646c4965b2da52b90e511ef4a3fe` |
