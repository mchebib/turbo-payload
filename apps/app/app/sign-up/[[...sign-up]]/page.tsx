import { SignUp } from "@repo/auth/components";

import styles from "../../auth.module.css";

export default function Page() {
  return (
    <main className={styles.shell}>
      <SignUp />
    </main>
  );
}
