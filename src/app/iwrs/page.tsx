import { redirect } from "next/navigation";

const EdcAfterLoginPage: React.FC = () => {
    redirect("/iwrs/home");
}

export default EdcAfterLoginPage;