const SavingsPage = () => {
    (savingGroups, setSavingGroup) = useState();
    (savers, setSavers) = useState();
    return (
        <div>
            <p>Join Saving group</p>
            {savingGroups.map((group) => {
                <div>{group}</div>
            })}
            <button type="submit">Join group</button>
        </div>
    )
}

export default SavingsPage