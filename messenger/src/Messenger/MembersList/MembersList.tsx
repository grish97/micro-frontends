import { useSelector, useDispatch } from "react-redux";
import { TMemberState } from "@store";

interface IPropType {}

export default function MembersList(props: IPropType) {
    const memberStore = useSelector<any, TMemberState>((store) => store.member);
}