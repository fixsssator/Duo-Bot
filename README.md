# ⟹⚡⟸ DUOLINGO PRO AUTOMATION ⟹⚡⟸

```
██████╗ ██╗   ██╗ ██████╗     ███████╗███████╗████████╗██╗   ██╗██████╗ 
██╔══██╗██║   ██║██╔═══██╗    ██╔════╝██╔════╝╚══██╔══╝██║   ██║██╔══██╗
██║  ██║██║   ██║██║   ██║    ███████╗█████╗     ██║   ██║   ██║██████╔╝
██║  ██║██║   ██║██║   ██║    ╚════██║██╔══╝     ██║   ██║   ██║██╔═══╝ 
██████╔╝╚██████╔╝╚██████╔╝    ███████║███████╗   ██║   ╚██████╔╝██║     
╚═════╝  ╚═════╝  ╚═════╝     ╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝     
```

<details open>
<summary><b>📊 LIVE DASHBOARD</b></summary>

<iframe src="dashboard.html" width="800" height="400" frameborder="0"></iframe>

</details>

<details>
<summary><b>⚙️ FEATURES</b></summary>

- Automated XP gain requests every 4 hours (30,000 XP)
- Automated streak maintenance every 4 hours (+10 days)
- Manual execution option
- Live dashboard with countdown timer

</details>

<details>
<summary><b>🔧 SETUP</b></summary>

1. Fork this repository
2. Add repository secret:
   ```
   Name: DUOLINGO_TOKEN
   Value: your_duolingo_pro_api_token
   ```
3. Activate workflows in Actions tab

</details>

<details>
<summary><b>📂 STRUCTURE</b></summary>

```
.
├── .github
│   └── workflows
│       ├── xp-automation.yml  # XP gain automation
│       └── streak-automation.yml  # Streak maintenance
├── dashboard.html             # Live dashboard HTML
├── dashboard.png             # Generated dashboard image
└── README.md
```

</details>

<details open>
<summary><b>⚠️ DISCLAIMER</b></summary>

```diff
- Not affiliated with Duolingo
- Use at your own risk
```

</details>

<!-- 
ASCII art generated with:
http://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow
-->
