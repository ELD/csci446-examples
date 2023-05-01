import type { ActionArgs, V2_MetaFunction} from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Remix App for Fetching Pokemon" }];
};

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const pokemonName = formData.get('pokemonName') as string;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  return await response.json();
};

export default function Index() {
  const pokemon = useActionData();
  return (
    <main>
      <Form method="post" action="/?index">
        <input type="text" name="pokemonName" placeholder="Pokemon name..." />
        <button type="submit">Fetch Pokemon</button>
      </Form>
      {pokemon && (
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </main>
  );
}
