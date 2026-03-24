import "../app/globals.css"
import Button from "../components/Button"

const Header = () => {
    return (
            <div className="flex items-center justify-between">
            <img src="/wealthup-new-whitelogo 1.svg" alt="Wealthup Logo" />
                <Button width="120px" shadow color="#294F7C" style={{width: "120px"}}>Login</Button>
            </div>
    )
}

export default Header