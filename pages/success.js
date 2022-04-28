import React, { useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../context/stateContext";
import { runFireworks } from "../lib/utils";
const Success = () => {
	const { setCartItems, setTotalPrice, setTotalQuantities } =
		useStateContext();
	useEffect(() => {
		localStorage.clear();
		setCartItems([]);
		setTotalPrice(0);
		setTotalQuantities(0);
		// runFireworks();
	});
	return (
		<div className="success-wrapper">
			<div className="success">
				<p className="icon">
					<BsBagCheckFill />
				</p>
				<h2>Thank you for your order!</h2>
				<p className="email-msg">
					Check your email inbox for the reciept.
				</p>
				<p className="description">
					If you have any questions , please contact us at
					<a className="email" href="mailtio:osamasaad1237@gmail.com">
						osamasaad1237@gmail.com
					</a>
				</p>
				<Link href="/" passHref>
          <a>
            <button type="button" width="300px" className="btn">
              Continue Shopping
            </button>
          </a>
				</Link>
			</div>
		</div>
	);
};

export default Success;
