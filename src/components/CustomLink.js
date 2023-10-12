import { useRouter } from "next/router";
import PropTypes from "prop-types";

const CustomLink = ({ href, children }) => {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <div onClick={handleClick} className="custom-link">
            {children}
        </div>
    );
};

CustomLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default CustomLink;
