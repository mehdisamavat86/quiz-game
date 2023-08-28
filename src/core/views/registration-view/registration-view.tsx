import { Paper, TextField } from "@mui/material";
import { LinkButton } from "@quiz/components/link-button";
import { route } from "@quiz/utils/route";
import { memo, useState } from "react";
import * as Styled from "./styles";

const RegistrationView = memo(() => {
  const [name, setName] = useState("");
  const trimedName = name.trim();

  return (
    <Styled.Wrapper>
      <Styled.Image />
      <Paper>
        <TextField
          value={name}
          onChange={(x) => setName(x.currentTarget.value)}
          placeholder="Enter Your Name"
          size="small"
          inputProps={{ maxLength: 50 }}
        />
      </Paper>

      <LinkButton
        disabled={!trimedName}
        href={route("quiz", { name: trimedName })}
      >
        Register
      </LinkButton>
    </Styled.Wrapper>
  );
});

RegistrationView.displayName = "RegistrationView";

export default RegistrationView;
