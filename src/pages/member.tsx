import React, { FC, useState } from "react";

export default function Member() {
  const [name, setName] = useState("");
  const [list_member, setListMember] = useState<string[]>([]);

  const Add = () => {
    setListMember([...list_member, name]);
  };
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  // console.log(list_member);
  const remove = (index: number) => {
    list_member.splice(index, 1);
    setListMember([...list_member]);
  };

  return (
    <>
      <div>
        <h1>Member:</h1>
        <input onChange={handleOnChange} placeholder="" />
        <button onClick={Add}>Add</button>
        <ul>
          {list_member.map((item, index: number) => {
            return <ListMemberItem item={item} index={index} remove={remove} />;
          })}
        </ul>
      </div>
    </>
  );
}

type ListMemberItemProps = {
  item: string;
  index: number;
  remove: (index: number) => void;
  bam?: boolean
};

const ListMemberItem: FC<ListMemberItemProps> = ({ remove, item, index }) => {
  return (
    <li>
      {item}
      <button
        onClick={() => {
          remove(index);
        }}
      >
        Delete
      </button>
    </li>
  );
};
