import SidebarHeader from "@/components/SidebarHeader";
import NavLinks from "@/components/NavLinks";
import MemberProfile from "@/components/MemberProfile";

const SideBar = () => {
    return (
        <div className="px-4 w-80 min-h-full bg-base-300 py-12 grid grid-rows-[auto,1fr,auto]">
            {/* first row */ }
            <SidebarHeader/>

            {/* second row */ }
            <NavLinks/>

            {/* third row */ }
            <MemberProfile/>
        </div>
    )
}

export default SideBar;