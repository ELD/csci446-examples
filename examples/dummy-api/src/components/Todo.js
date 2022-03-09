function Todo({ title, completed }) {
  return (
    <div>
      <p className="ml-4">
        <input
          type="checkbox"
          checked={!!completed}
          readOnly
          className="mr-2"
        />
        {title}
      </p>
    </div>
  );
}

export default Todo;
