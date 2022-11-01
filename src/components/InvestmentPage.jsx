const InvestmentPage = ({user}) => {
    const calcReward = () => {
        let yourReward = user.Reward
        if (user.Tier == "Tier 1") {
            yourReward = (0.05 * user.AmountInvested)
        }
        if (user.Tier == "Tier 2") {
            yourReward = (0.1 * user.AmountInvested)
        }
        if (user.Tier == "Tier 3") {
            yourReward = (0.2 * user.AmountInvested)
        }
        else return("Choose a Tier");

        this.setUser({Reward: yourReward})
    };


    const calcTotalAmountWithdrawable = ({user}) => {
            return user.AmountInvested + user.Reward
    };


    return (
        <div>
            <input type="number" name="Amount" id="" onChange={(e) => {
                setUser({AmountInvested: e.target.value})
            }}/>
            <p>Reward: ${user.Reward}</p>
            <p>Duration: 1 week</p>
            <p>Total Amount Withdrawable = ${user.TotalWithdrawable}</p>
        </div>
    )
}

export default InvestmentPage