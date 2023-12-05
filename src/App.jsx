import { Button, Space } from "antd";
function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-red-500 underline">
          Pet home page!
        </h1>
        <Space wrap>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Space>
      </div>
    </>
  );
}

export default App;
