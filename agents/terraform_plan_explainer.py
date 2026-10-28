def explain_terraform_plan(plan_json: dict) -> dict:
    if not plan_json:
        return {"error": "Invalid or empty plan JSON provided."}
    
    resource_changes = plan_json.get("resource_changes", [])
    actions_summary = {"create": 0, "update": 0, "delete": 0}
    
    for change in resource_changes:
        actions = change.get("change", {}).get("actions", [])
        for action in actions:
            if action in actions_summary:
                actions_summary[action] += 1

    return {
        "status": "success",
        "summary": f"Plan proposes: {actions_summary['create']} to create, {actions_summary['update']} to update, {actions_summary['delete']} to delete.",
        "actions": actions_summary
    }
